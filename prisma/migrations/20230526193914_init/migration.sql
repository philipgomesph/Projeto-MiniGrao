-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nameUser" TEXT NOT NULL,
    "statusUser" TEXT NOT NULL,
    "passwordUser" TEXT NOT NULL,
    "loginUser" TEXT NOT NULL,
    "modelStatusUserId" INTEGER,
    CONSTRAINT "users_modelStatusUserId_fkey" FOREIGN KEY ("modelStatusUserId") REFERENCES "status-user" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "status-user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "commodities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "commodities" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "type-offer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "offer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idUserOffer" TEXT NOT NULL,
    "priceOffer" DECIMAL,
    "amountOffer" DECIMAL,
    "commodities" INTEGER NOT NULL,
    "typeOfferId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "offer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idUserSell" TEXT NOT NULL,
    "idUserBuy" TEXT NOT NULL,
    "priceTransaction" DECIMAL NOT NULL,
    "idOffer" TEXT NOT NULL,
    CONSTRAINT "transaction_idUserSell_fkey" FOREIGN KEY ("idUserSell") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "transaction_idUserBuy_fkey" FOREIGN KEY ("idUserBuy") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
