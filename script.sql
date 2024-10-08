USE [FootWearDB]
GO
SET IDENTITY_INSERT [dbo].[Brands] ON 

INSERT [dbo].[Brands] ([BrandId], [BrandName]) VALUES (1, N'Adidas')
INSERT [dbo].[Brands] ([BrandId], [BrandName]) VALUES (2, N'Puma')
INSERT [dbo].[Brands] ([BrandId], [BrandName]) VALUES (3, N'Nike')
INSERT [dbo].[Brands] ([BrandId], [BrandName]) VALUES (4, N'Bata')
INSERT [dbo].[Brands] ([BrandId], [BrandName]) VALUES (5, N'Skechers')
INSERT [dbo].[Brands] ([BrandId], [BrandName]) VALUES (6, N'Asics')
SET IDENTITY_INSERT [dbo].[Brands] OFF
GO
SET IDENTITY_INSERT [dbo].[Categories] ON 

INSERT [dbo].[Categories] ([CategoryId], [CategoryName]) VALUES (1, N'Shoes')
INSERT [dbo].[Categories] ([CategoryId], [CategoryName]) VALUES (2, N'Sandal')
INSERT [dbo].[Categories] ([CategoryId], [CategoryName]) VALUES (3, N'Slippers')
INSERT [dbo].[Categories] ([CategoryId], [CategoryName]) VALUES (4, N'Flats')
INSERT [dbo].[Categories] ([CategoryId], [CategoryName]) VALUES (5, N'Footwear')
SET IDENTITY_INSERT [dbo].[Categories] OFF
GO
SET IDENTITY_INSERT [dbo].[SubCategories] ON 

INSERT [dbo].[SubCategories] ([SubCategoryId], [SubCategoryName], [Description], [CategoryId], [BrandId]) VALUES (1, N'Sneakers', N'They offer perfect support for brisk walks, running, and long travel hours. Sneakers also come in handy during adventurous activities like hiking, camping, and treks amongst others', 1, 1)
INSERT [dbo].[SubCategories] ([SubCategoryId], [SubCategoryName], [Description], [CategoryId], [BrandId]) VALUES (2, N'Sneakers', N'They offer perfect support for brisk walks, running, and long travel hours. Sneakers also come in handy during adventurous activities like hiking, camping, and treks amongst others', 1, 2)
INSERT [dbo].[SubCategories] ([SubCategoryId], [SubCategoryName], [Description], [CategoryId], [BrandId]) VALUES (3, N'Sneakers', N'They offer perfect support for brisk walks, running, and long travel hours. Sneakers also come in handy during adventurous activities like hiking, camping, and treks amongst others', 1, 3)
INSERT [dbo].[SubCategories] ([SubCategoryId], [SubCategoryName], [Description], [CategoryId], [BrandId]) VALUES (4, N'Sneakers', N'They offer perfect support for brisk walks, running, and long travel hours. Sneakers also come in handy during adventurous activities like hiking, camping, and treks amongst others', 1, 3)
INSERT [dbo].[SubCategories] ([SubCategoryId], [SubCategoryName], [Description], [CategoryId], [BrandId]) VALUES (5, N'Loafer', N'They are commonly made of leather and can be used for casual wear or more polished looks. Loafers can feature design elements like tassels or buckles.', 1, 1)
INSERT [dbo].[SubCategories] ([SubCategoryId], [SubCategoryName], [Description], [CategoryId], [BrandId]) VALUES (6, N'Loafer', N'They are commonly made of leather and can be used for casual wear or more polished looks. Loafers can feature design elements like tassels or buckles.', 1, 2)
INSERT [dbo].[SubCategories] ([SubCategoryId], [SubCategoryName], [Description], [CategoryId], [BrandId]) VALUES (7, N'Loafer', N'They are commonly made of leather and can be used for casual wear or more polished looks. Loafers can feature design elements like tassels or buckles.', 1, 3)
INSERT [dbo].[SubCategories] ([SubCategoryId], [SubCategoryName], [Description], [CategoryId], [BrandId]) VALUES (8, N'Loafer', N'They are commonly made of leather and can be used for casual wear or more polished looks. Loafers can feature design elements like tassels or buckles.', 1, 4)
INSERT [dbo].[SubCategories] ([SubCategoryId], [SubCategoryName], [Description], [CategoryId], [BrandId]) VALUES (9, N'Loafer', N'They are commonly made of leather and can be used for casual wear or more polished looks. Loafers can feature design elements like tassels or buckles.', 1, 5)
INSERT [dbo].[SubCategories] ([SubCategoryId], [SubCategoryName], [Description], [CategoryId], [BrandId]) VALUES (10, N'Oxford', N'Oxfords are characterized by their closed lacing system, offering a sleek and neat appearance. They are traditionally considered formal wear and are identified by their low heel.', 1, 1)
INSERT [dbo].[SubCategories] ([SubCategoryId], [SubCategoryName], [Description], [CategoryId], [BrandId]) VALUES (11, N'Oxford', N'Oxfords are characterized by their closed lacing system, offering a sleek and neat appearance. They are traditionally considered formal wear and are identified by their low heel.', 1, 2)
INSERT [dbo].[SubCategories] ([SubCategoryId], [SubCategoryName], [Description], [CategoryId], [BrandId]) VALUES (12, N'Oxford', N'Oxfords are characterized by their closed lacing system, offering a sleek and neat appearance. They are traditionally considered formal wear and are identified by their low heel.', 1, 3)
INSERT [dbo].[SubCategories] ([SubCategoryId], [SubCategoryName], [Description], [CategoryId], [BrandId]) VALUES (13, N'Oxford', N'Oxfords are characterized by their closed lacing system, offering a sleek and neat appearance. They are traditionally considered formal wear and are identified by their low heel.', 1, 4)
INSERT [dbo].[SubCategories] ([SubCategoryId], [SubCategoryName], [Description], [CategoryId], [BrandId]) VALUES (14, N'Oxford', N'Oxfords are characterized by their closed lacing system, offering a sleek and neat appearance. They are traditionally considered formal wear and are identified by their low heel.', 1, 5)
INSERT [dbo].[SubCategories] ([SubCategoryId], [SubCategoryName], [Description], [CategoryId], [BrandId]) VALUES (15, N'Oxford', N'Oxfords are characterized by their closed lacing system, offering a sleek and neat appearance. They are traditionally considered formal wear and are identified by their low heel.', 1, 6)
SET IDENTITY_INSERT [dbo].[SubCategories] OFF
GO
SET IDENTITY_INSERT [dbo].[Colors] ON 

INSERT [dbo].[Colors] ([ColorId], [ColorName]) VALUES (1, N'Black')
INSERT [dbo].[Colors] ([ColorId], [ColorName]) VALUES (2, N'Dark Brown')
INSERT [dbo].[Colors] ([ColorId], [ColorName]) VALUES (3, N'Navy Blue')
INSERT [dbo].[Colors] ([ColorId], [ColorName]) VALUES (4, N'Charcoal Grey')
INSERT [dbo].[Colors] ([ColorId], [ColorName]) VALUES (5, N'Cocoa Brown')
INSERT [dbo].[Colors] ([ColorId], [ColorName]) VALUES (6, N'Tan')
INSERT [dbo].[Colors] ([ColorId], [ColorName]) VALUES (7, N'Beige')
SET IDENTITY_INSERT [dbo].[Colors] OFF
GO
SET IDENTITY_INSERT [dbo].[Sizes] ON 

INSERT [dbo].[Sizes] ([SizeId], [SizeNo]) VALUES (1, N'4')
INSERT [dbo].[Sizes] ([SizeId], [SizeNo]) VALUES (2, N'5')
INSERT [dbo].[Sizes] ([SizeId], [SizeNo]) VALUES (3, N'6')
INSERT [dbo].[Sizes] ([SizeId], [SizeNo]) VALUES (4, N'7')
INSERT [dbo].[Sizes] ([SizeId], [SizeNo]) VALUES (5, N'8')
INSERT [dbo].[Sizes] ([SizeId], [SizeNo]) VALUES (6, N'9')
SET IDENTITY_INSERT [dbo].[Sizes] OFF
GO
SET IDENTITY_INSERT [dbo].[States] ON 

INSERT [dbo].[States] ([Id], [StateName]) VALUES (1, N'Madhya Pradesh')
INSERT [dbo].[States] ([Id], [StateName]) VALUES (2, N'Uttar Pradesh')
INSERT [dbo].[States] ([Id], [StateName]) VALUES (3, N'Gujarat')
INSERT [dbo].[States] ([Id], [StateName]) VALUES (4, N'Maharashtra')
INSERT [dbo].[States] ([Id], [StateName]) VALUES (5, N'Rajasthan')
INSERT [dbo].[States] ([Id], [StateName]) VALUES (6, N'Punjab')
SET IDENTITY_INSERT [dbo].[States] OFF
GO
SET IDENTITY_INSERT [dbo].[Cities] ON 

INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (1, N'Indore', 1)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (2, N'Dewas', 1)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (3, N'Bhopal', 1)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (4, N'Barwani', 1)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (5, N'Jabalpur', 1)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (6, N'Agra', 2)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (7, N'Kanpur', 2)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (8, N'Lucknow', 2)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (9, N'Jhansi', 2)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (10, N'Bareilly', 2)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (11, N'Mirzapur', 2)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (12, N'Ahmedabad', 3)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (13, N'Surat', 3)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (14, N'Gandhinagar', 3)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (15, N'Rajkot', 3)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (16, N'Vapi', 3)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (17, N'Pune', 4)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (18, N'Nashik', 4)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (19, N'Mumbai', 4)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (20, N'Udaipur', 5)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (21, N'Jaipur', 5)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (22, N'Amritsar', 6)
INSERT [dbo].[Cities] ([Id], [CityName], [StateId]) VALUES (23, N'Chandigarh', 6)
SET IDENTITY_INSERT [dbo].[Cities] OFF
GO
SET IDENTITY_INSERT [dbo].[Vendors] ON 

INSERT [dbo].[Vendors] ([VendorId], [FirstName], [LastName], [Contact], [Email], [Address], [StateId], [CityId]) VALUES (1, N'Dipanshu', N'Kanera', N'9090901234', N'kaneradipanshu@gmail.com', N'MR-9', 1, 1)
INSERT [dbo].[Vendors] ([VendorId], [FirstName], [LastName], [Contact], [Email], [Address], [StateId], [CityId]) VALUES (2, N'tushar ', N'gandhwani', N'7652444444', N'tushar@gmail.com', N'nisarpur', 1, 1)
INSERT [dbo].[Vendors] ([VendorId], [FirstName], [LastName], [Contact], [Email], [Address], [StateId], [CityId]) VALUES (3, N'mansi', N'kon hai', N'9923211365', N'iammansi@gmail.com', N'47- azad nagar main road', 2, 11)
INSERT [dbo].[Vendors] ([VendorId], [FirstName], [LastName], [Contact], [Email], [Address], [StateId], [CityId]) VALUES (4, N'Vishal ', N'Patidar', N'9112556644', N'vp@gmail.com', N'ashok nagar  futikoti', 3, 14)
SET IDENTITY_INSERT [dbo].[Vendors] OFF
GO
SET IDENTITY_INSERT [dbo].[Products] ON 

INSERT [dbo].[Products] ([Product_Id], [VendorId], [SubcategoryId], [ColorId], [SizeId], [ProductName], [ImageUrl], [Description], [UnitPrice], [Gender]) VALUES (2, 1, 1, 1, 4, N'TXMEANS Black Loafer', N'https://m.media-amazon.com/images/I/71cjT3Zji6L._SX695_.jpg', N'Step into ultimate comfort with these product from the house of BATA Featuring an eye-catching design and a refined appeal.', CAST(1900.00 AS Decimal(18, 2)), N'male')
SET IDENTITY_INSERT [dbo].[Products] OFF
GO
SET IDENTITY_INSERT [dbo].[Purchases] ON 

INSERT [dbo].[Purchases] ([Purchase_Id], [Product_Id], [Quantity], [UnitPrice], [TotalPrice], [SellPrice], [PurchaseDate], [PaymentMethod], [Status]) VALUES (2, 2, CAST(10.00 AS Decimal(18, 2)), CAST(900.00 AS Decimal(18, 2)), CAST(9000.00 AS Decimal(18, 2)), CAST(1350.00 AS Decimal(18, 2)), CAST(N'2024-09-16T06:53:41.4380000' AS DateTime2), N'cash', N'success')
INSERT [dbo].[Purchases] ([Purchase_Id], [Product_Id], [Quantity], [UnitPrice], [TotalPrice], [SellPrice], [PurchaseDate], [PaymentMethod], [Status]) VALUES (3, 2, CAST(20.00 AS Decimal(18, 2)), CAST(780.00 AS Decimal(18, 2)), CAST(15600.00 AS Decimal(18, 2)), CAST(1260.00 AS Decimal(18, 2)), CAST(N'2024-09-16T06:55:47.4350000' AS DateTime2), N'cash', N'reject')
INSERT [dbo].[Purchases] ([Purchase_Id], [Product_Id], [Quantity], [UnitPrice], [TotalPrice], [SellPrice], [PurchaseDate], [PaymentMethod], [Status]) VALUES (4, 2, CAST(20.00 AS Decimal(18, 2)), CAST(780.00 AS Decimal(18, 2)), CAST(15600.00 AS Decimal(18, 2)), CAST(1260.00 AS Decimal(18, 2)), CAST(N'2024-09-16T06:55:47.4350000' AS DateTime2), N'cash', N'pending')
SET IDENTITY_INSERT [dbo].[Purchases] OFF
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240912125218_Part01', N'8.0.8')
GO
