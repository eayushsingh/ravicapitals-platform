// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title FractionalPropertyToken
 * @dev Permissioned real estate fractional token compliant with SPV legal requirements
 */
contract FractionalPropertyToken {
    string public name;
    string public symbol;
    uint8 public immutable decimals = 0; // Whole fractional tokens
    uint256 public totalSupply;
    address public owner;
    string public spvRegistrationId;

    mapping(address => uint256) public balanceOf;
    mapping(address => bool) public isKycVerified;
    mapping(address => mapping(address => uint256)) public allowance;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event KycStatusUpdated(address indexed investor, bool status);
    event TokensMinted(address indexed to, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner/platform can execute");
        _;
    }

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _spvId,
        uint256 _initialSupply
    ) {
        name = _name;
        symbol = _symbol;
        spvRegistrationId = _spvId;
        owner = msg.sender;
        isKycVerified[msg.sender] = true;
        
        totalSupply = _initialSupply;
        balanceOf[msg.sender] = _initialSupply;
        emit Transfer(address(0), msg.sender, _initialSupply);
    }

    function setKycStatus(address _investor, bool _status) external onlyOwner {
        isKycVerified[_investor] = _status;
        emit KycStatusUpdated(_investor, _status);
    }

    function transfer(address _to, uint256 _amount) external returns (bool) {
        require(isKycVerified[msg.sender], "Sender failed KYC check");
        require(isKycVerified[_to], "Recipient failed KYC check");
        require(balanceOf[msg.sender] >= _amount, "Insufficient balance");

        balanceOf[msg.sender] -= _amount;
        balanceOf[_to] += _amount;
        emit Transfer(msg.sender, _to, _amount);
        return true;
    }

    function approve(address _spender, uint256 _amount) external returns (bool) {
        allowance[msg.sender][_spender] = _amount;
        emit Approval(msg.sender, _spender, _amount);
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _amount) external returns (bool) {
        require(isKycVerified[_from], "Source failed KYC check");
        require(isKycVerified[_to], "Recipient failed KYC check");
        require(balanceOf[_from] >= _amount, "Insufficient balance");
        require(allowance[_from][msg.sender] >= _amount, "Allowance exceeded");

        allowance[_from][msg.sender] -= _amount;
        balanceOf[_from] -= _amount;
        balanceOf[_to] += _amount;
        emit Transfer(_from, _to, _amount);
        return true;
    }
}
