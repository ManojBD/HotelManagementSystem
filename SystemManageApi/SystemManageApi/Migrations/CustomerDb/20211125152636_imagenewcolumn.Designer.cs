﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SystemManageApi.Models;

namespace SystemManageApi.Migrations.CustomerDb
{
    [DbContext(typeof(CustomerDbContext))]
    [Migration("20211125152636_imagenewcolumn")]
    partial class imagenewcolumn
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.11")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("SystemManageApi.Models.Customer", b =>
                {
                    b.Property<int>("CustomerID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("BillingAddress")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("CustomerCity")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("EmailAddress")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("MobileNumber")
                        .HasColumnType("int");

                    b.Property<string>("NicNo")
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("NumberOfday")
                        .HasColumnType("int");

                    b.Property<int>("PostalCode")
                        .HasColumnType("int");

                    b.Property<int>("TotalPrice")
                        .HasColumnType("int");

                    b.Property<string>("VeimageName")
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("CustomerID");

                    b.ToTable("Customers");
                });
#pragma warning restore 612, 618
        }
    }
}
