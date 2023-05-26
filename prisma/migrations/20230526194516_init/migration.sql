/*
  Warnings:

  - Added the required column `open` to the `offer` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_offer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idUserOffer" TEXT NOT NULL,
    "priceOffer" DECIMAL,
    "amountOffer" DECIMAL,
    "commodities" INTEGER NOT NULL,
    "typeOfferId" INTEGER NOT NULL,
    "open" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "offer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_offer" ("amountOffer", "commodities", "id", "idUserOffer", "priceOffer", "typeOfferId", "userId") SELECT "amountOffer", "commodities", "id", "idUserOffer", "priceOffer", "typeOfferId", "userId" FROM "offer";
DROP TABLE "offer";
ALTER TABLE "new_offer" RENAME TO "offer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
