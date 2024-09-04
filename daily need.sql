CREATE TABLE Vendors (
    VendorID INT IDENTITY(1,1) PRIMARY KEY, -- Unique identifier for each vendor
    VendorName NVARCHAR(255) NOT NULL,      -- Name of the vendor
	 VendorLast NVARCHAR(255) NOT NULL,      -- Name of the vendor
    Contact NVARCHAR(255),              -- Name of the contact person
    ContactEmail NVARCHAR(255) UNIQUE,      -- Contact email of the vendor
    Address NVARCHAR(255),                  -- Address of the vendor
    City NVARCHAR(100),                     -- City
    State NVARCHAR(100),                    -- State or Province
    Country NVARCHAR(100),                  -- Country
    CreatedDate DATETIME DEFAULT GETDATE(), -- Date when the vendor was added
    --UpdatedDate DATETIME DEFAULT GETDATE()  -- Date when the vendor was last updated
);


CREATE TABLE Categories (
    CategoryID INT IDENTITY(1,1) PRIMARY KEY, -- Unique identifier for each category
    CategoryName NVARCHAR(255) NOT NULL,      -- Name of the category
);

create table states(
    stateId int Identity(1,1) primary key,
    StateName nvarchar(255) not null
)

create table cities(
    cityID int identity(1,1) primary key,
    cityName nvarchar(259) not null,
    stateId Int Foreign key REFERENCES states(stateId)
);












CREATE TABLE Products(
    ProductID INT IDENTITY(1,1) PRIMARY KEY, -- Unique identifier for each product
    VendorID INT FOREIGN KEY REFERENCES Vendors(VendorID), -- Foreign key to the Vendors table
	CategoryID INT FOREIGN KEY REFERENCES Categories(CategoryID), -- Foreign key to the Categories table
    SubcategoryID INT FOREIGN KEY REFERENCES Subcategories(SubcategoryID), -- Foreign key to the Subcategories table
    ProductName NVARCHAR(255) NOT NULL,      -- Name of the product
    Description NVARCHAR(MAX),               -- Description of the product
    UnitPrice DECIMAL(18, 2) NOT NULL,           --unit Price of the product
	SealPrice DECIMAL(18, 2) NOT NULL,           --Seal Price of the product
    QuantityInStock INT NOT NULL,            -- Inventory count
    --Category NVARCHAR(100),                  -- Product category
    ImageUrl NVARCHAR(255),                  -- URL of the product image
    CreatedDate DATETIME DEFAULT GETDATE(),  -- Date when the product was added
    UpdatedDate DATETIME DEFAULT GETDATE(),  -- Date when the product was last updated
);

CREATE TABLE purchaseOrders (
    ORDERID INT IDENTITY(1,1) PRIMARY KEY,
    ProductID INT FOREIGN KEY REFERENCES Products(ProductID),
    TotalAmount decimal(18,2) NOT NULL  -- Quantity of the product ordered
);
SELECT SUM(p.Price * po.Quantity) AS TotalAmount
FROM purchaseOrders po
JOIN Products p ON po.ProductID = p.ProductID;

CREATE TABLE PaymentDetails (
    PaymentID INT IDENTITY(1,1) PRIMARY KEY,         -- Unique identifier for each payment
    VendorID INT NOT NULL,                          -- Foreign key to the Vendors table
    PaymentDate DATETIME DEFAULT GETDATE(),          -- Date when the payment was made
    Amount DECIMAL(18, 2) NOT NULL,                 -- Amount of the payment
    PaymentMethod NVARCHAR(50),                     -- Method of payment (e.g., 'Bank Transfer', 'Credit Card','Cash on Delivery)
	PaymentStatus NVARCHAR(50) DEFAULT 'Completed', -- Status of the payment (e.g., Completed, Pending, Failed)
    --ReferenceNumber NVARCHAR(100),                  -- Reference number or transaction ID
    --Notes NVARCHAR(MAX),                           -- Additional notes about the payment
    FOREIGN KEY (VendorID) REFERENCES Vendors(VendorID)  -- Foreign key constraint to Vendors table
);


CREATE TABLE avaibleStockInAdmin (
    StockID INT IDENTITY(1,1) PRIMARY KEY,            -- Unique identifier for each stock entry
    ProductID INT FOREIGN KEY REFERENCES Products(ProductID), -- Foreign key to the Products table
    Quantity INT NOT NULL,                             -- Quantity of the product in stock
    LastUpdated DATETIME DEFAULT GETDATE(),            -- Date when the stock was last updated
    UpdatedBy NVARCHAR(255) NOT NULL                  -- User or admin who made the update
);



CREATE TABLE Subcategories (
    SubcategoryID INT IDENTITY(1,1) PRIMARY KEY, -- Unique identifier for each subcategory
    SubcategoryName NVARCHAR(255) NOT NULL,    -- Name of the subcategory
    Description NVARCHAR(MAX),                  -- Description of the subcategory
	Color int Foreign key REFERENCES colors(colorID),
	Size int Foreign key REFERENCES sizes(sizeID)
	Brand int Foreign key REFERENCES brands(brandId)
    CategoryID INT FOREIGN KEY REFERENCES Categories(CategoryID), -- Foreign key to the Categories table
	Price decimal(18,2) not null
);
ALTER TABLE Products
ADD CategoryID INT FOREIGN KEY REFERENCES Categories(CategoryID), -- Foreign key to the Categories table
    SubcategoryID INT FOREIGN KEY REFERENCES Subcategories(SubcategoryID); -- Foreign key to the Subcategories table
	select * from Vendors;
	select * from categories;
	select * from subcategories;
	select * from products;

	select * from INFORMATION_SCHEMA.COLUMNS where TABLE_NAME = 'products';

	--CREATE TABLE COLOR SIZE BRAND  

--master table  color , brand , size , category  , state  
--table vendor , customer , admin, product , subcategory ,city 

create table state (Id int primary key, StateName nvarchar(255));
create table city (id int , CityName nvarchar(250) not null , StateID INT FOREIGN KEY REFERENCES State(Id));

drop table state;