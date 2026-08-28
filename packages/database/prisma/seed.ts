import { PrismaClient, AssetType, AssetStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding properties...');

  await prisma.property.deleteMany();

  const properties = [
    {
      title: 'Prestige Tech Park — Block C',
      location: 'Whitefield, Bengaluru · Grade A office',
      type: AssetType.COMMERCIAL,
      status: AssetStatus.ACTIVE,
      targetValuation: 120000000.00, // ₹12 Cr
      tokenPrice: 5000.00,           // ₹5,000 per token
      totalTokens: 24000,
      availableTokens: 18400,
      expectedYield: 10.20,          // 10.2%
      spvName: 'RaviCap SPV Alpha Bengaluru Ltd',
    },
    {
      title: 'Gachibowli Sky Residences',
      location: 'Gachibowli, Hyderabad · Premium apartments',
      type: AssetType.RESIDENTIAL,
      status: AssetStatus.ACTIVE,
      targetValuation: 85000000.00,  // ₹8.5 Cr
      tokenPrice: 5000.00,           // ₹5,000 per token
      totalTokens: 17000,
      availableTokens: 9200,
      expectedYield: 8.90,           // 8.9%
      spvName: 'RaviCap SPV Beta Hyderabad Ltd',
    },
    {
      title: 'ORR Growth Corridor — Phase II',
      location: 'Outer Ring Road, Hyderabad · High-growth land',
      type: AssetType.PLOTS,
      status: AssetStatus.ACTIVE,
      targetValuation: 60000000.00,  // ₹6.0 Cr
      tokenPrice: 5000.00,           // ₹5,000 per token
      totalTokens: 12000,
      availableTokens: 4100,
      expectedYield: 14.00,          // 14.0%
      spvName: 'RaviCap SPV Gamma Land Ltd',
    },
  ];

  for (const prop of properties) {
    await prisma.property.create({ data: prop });
  }

  console.log('Seeding completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
