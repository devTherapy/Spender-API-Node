'use strict';
const uuidv4 = require('uuid').v4

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   //card transaction categories
   await queryInterface.bulkInsert('Card_Transaction_Categories', [
     await{CategoryName: 'Transferred', Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
     await{CategoryName: 'Expended', Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
    await{CategoryName: 'Generated', Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},

   ], {});
   
     //querying for card transaction category Id to serve relationships
   const transferId = await queryInterface.sequelize.query(
    `SELECT "Id" from "Card_Transaction_Categories" where "CategoryName" = 'Transferred'`,
   )
   const ExpendedId = await queryInterface.sequelize.query(
    `SELECT "Id" from "Card_Transaction_Categories" where "CategoryName" = 'Expended'`,
   )
   const GeneratedId = await queryInterface.sequelize.query(
    `SELECT "Id" from "Card_Transaction_Categories" where "CategoryName" = 'Generated'`,
   )

   //wallet transaction categories
   await queryInterface.bulkInsert('Wallet_Transaction_Categories', [
    {CategoryName: 'Credit', Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
    {CategoryName: 'Debit', Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  ], {});

  //querying for wallet transaction category Id to serve relationships
  const creditId = await queryInterface.sequelize.query(
    `SELECT "Id" from "Wallet_Transaction_Categories" where "CategoryName" = 'Credit'`,
  )
  const debitId = await queryInterface.sequelize.query(
    `SELECT "Id" from "Wallet_Transaction_Categories" where "CategoryName" = 'Debit'`,
  )

//roles
await queryInterface.bulkInsert('Roles', [
  {roleName: 'User', Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {roleName: 'Admin', Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
], {})

  //querying for role Id to serve relationships

const userId = await queryInterface.sequelize.query(
  `SELECT "Id" from "Roles" where "roleName" = 'User'`,
  )

const adminId = await queryInterface.sequelize.query(
  `SELECT "Id" from "Roles" where "roleName" = 'Admin'`,
    )

// users 
await queryInterface.bulkInsert('Users', [
  {FirstName: 'Folusayo', LastName: 'Abe', Email: 'physionode@gmail.com', Password: 'Bullox#2minu', isActive: true, profilePictureUrl: 'http://', gender: 'male', RoleId: adminId[0][0].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {FirstName: 'Gbenga', LastName: 'Omowole', Email: 'omowole.gbenga@gmail.com', Password: 'Bullox#2minu', isActive: true, profilePictureUrl: 'http://', gender: 'male', RoleId: adminId[0][0].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {FirstName: 'Linux', LastName: 'peppermint', Email: 'linux@gmail.com', Password: 'Bullox#2minu', isActive: true, profilePictureUrl: 'http://', gender: 'female', RoleId: userId[0][0].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {FirstName: 'Microsoft', LastName: 'Neptune', Email: 'windows@gmail.com', Password: 'Bullox#2minu', isActive: true, profilePictureUrl: 'http://', gender: 'male', RoleId: userId[0][0].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},

], {})
const users = await queryInterface.sequelize.query(
  'SELECT "Id" from "Users";'
)
//wallet
await queryInterface.bulkInsert('Wallets', [
  {Balance: 9000.00, UserId: users[0][0].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {Balance: 49000.00, UserId: users[0][1].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {Balance: 99000.00, UserId: users[0][2].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {Balance: 19000.00, UserId: users[0][3].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
], {})
const wallets = await queryInterface.sequelize.query(
  'SELECT "Id" from "Wallets";'
)

//user Address
await queryInterface.bulkInsert('User_Addresses', [
  {streetNumber: '12', street: 'Donza klose', city: 'Lagos',state: 'Lagos', country: 'Nigeria', postalCode: 123456789, UserId: users[0][0].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {streetNumber: '21', street: 'Makinda klose', city: 'Asaba',state: 'Delta', country: 'Nigeria', postalCode: 123456789, UserId: users[0][1].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {streetNumber: '34B', street: 'Nahina Avenue', city: 'Lekki',state: 'Lagos', country: 'Nigeria', postalCode: 123456789, UserId: users[0][2].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {streetNumber: '45C', street: 'Zamura Avenue', city: 'Ikoyi',state: 'Lagos', country: 'Nigeria', postalCode: 123456789, UserId: users[0][3].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
], {})

//user contact 
await queryInterface.bulkInsert('User_Contacts', [
  {countryCode: '+234', AreaCode: '8163446333', UserId: users[0][0].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {countryCode: '+234', AreaCode: '8163446333', UserId: users[0][1].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {countryCode: '+234', AreaCode: '8163446333', UserId: users[0][2].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {countryCode: '+234', AreaCode: '8163446333', UserId: users[0][3].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
], {})
//wallet transaction
await queryInterface.bulkInsert('Wallet_Transactions', [
  {Balance: 10000, TransactionAmount: 10000.00, WalletTransactionCategoryId: creditId[0][0].Id, WalletId: wallets[0][0].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {Balance: 50000, TransactionAmount: 50000.00, WalletTransactionCategoryId: creditId[0][0].Id, WalletId: wallets[0][1].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {Balance: 100000, TransactionAmount: 100000.00, WalletTransactionCategoryId: creditId[0][0].Id, WalletId: wallets[0][2].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {Balance: 20000,TransactionAmount: 20000.00, WalletTransactionCategoryId: creditId[0][0].Id, WalletId: wallets[0][3].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {Balance: 9000,TransactionAmount: 1000.00, WalletTransactionCategoryId: debitId[0][0].Id, WalletId: wallets[0][0].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {Balance: 49000,TransactionAmount: 1000.00, WalletTransactionCategoryId: debitId[0][0].Id, WalletId: wallets[0][1].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {Balance: 19000,TransactionAmount: 1000.00, WalletTransactionCategoryId: debitId[0][0].Id, WalletId: wallets[0][2].Id, Id: uuidv4(),createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {Balance: 19000,TransactionAmount: 1000.00, WalletTransactionCategoryId: debitId[0][0].Id, WalletId: wallets[0][3].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
], {})

// Merchants
await queryInterface.bulkInsert('Merchants', [
  {MerchantName: 'chicken-republic', companyLogo: 'http://', Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {MerchantName: 'dominos', companyLogo: 'http://', Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {MerchantName: 'shop-rite', companyLogo: 'http://', Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},  
  {MerchantName: 'New Madarin', companyLogo: 'http://', Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},  
], {})
const merchants = await queryInterface.sequelize.query(
  'SELECT "Id" from "Merchants";'
)
//Merchant Contacts
await queryInterface.bulkInsert('Merchant_Contacts', [
  {countryCode: '+234', areaCode: '8163446333', MerchantId: merchants[0][0].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {countryCode: '+234', areaCode: '8163446333', MerchantId: merchants[0][1].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {countryCode: '+234', areaCode: '8163446333', MerchantId: merchants[0][2].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {countryCode: '+234', areaCode: '8163446333', MerchantId: merchants[0][3].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
], {})
// Merchant Address
await queryInterface.bulkInsert('Merchant_Addresses', [
  {streetNumber: '12', street: 'St monica', city: 'Lagos',state: 'Lagos', country: 'Nigeria', postalCode: 123456789, MerchantId: merchants[0][0].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {streetNumber: '21', street: 'Lasissi', city: 'Asaba',state: 'Delta', country: 'Nigeria', postalCode: 123456789, MerchantId: merchants[0][1].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {streetNumber: '34B', street: 'Marina Avenue', city: 'Lekki',state: 'Lagos', country: 'Nigeria', postalCode: 123456789, MerchantId: merchants[0][2].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {streetNumber: '45C', street: 'Kantakeron Klose', city: 'Ikoyi',state: 'Lagos', country: 'Nigeria', postalCode: 123456789, MerchantId: merchants[0][3].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
], {})

// cards
await queryInterface.bulkInsert('Cards', [
  {value: '1000', MerchantId: merchants[0][0].Id, isActive: true, UserId: users[0][0].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {value: '1000', MerchantId: merchants[0][1].Id, isActive: true, UserId: users[0][1].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {value: '1000', MerchantId: merchants[0][2].Id, isActive: true, UserId: users[0][2].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  {value: '1000', MerchantId: merchants[0][3].Id, isActive: true,  UserId: users[0][3].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
], {})
const cards = await queryInterface.sequelize.query(
  'SELECT "Id" from "Cards";'
)

//cards transactions
await queryInterface.bulkInsert('Card_Transactions', [
  { CardTransactionCategoryId: GeneratedId[0][0].Id, CardId: cards[0][0].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  { CardTransactionCategoryId: GeneratedId[0][0].Id, CardId: cards[0][1].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  { CardTransactionCategoryId: GeneratedId[0][0].Id, CardId: cards[0][2].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},
  { CardTransactionCategoryId: GeneratedId[0][0].Id, CardId: cards[0][3].Id, Id: uuidv4(), createdAt:new Date().toUTCString(), updatedAt: new Date().toUTCString()},  
], {})


  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
