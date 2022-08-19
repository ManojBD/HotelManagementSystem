﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SystemManageApi.Models;

namespace SystemManageApi.Migrations.FoodDb
{
    [DbContext(typeof(FoodDbContext))]
    partial class FoodDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.17")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("SystemManageApi.Models.Food", b =>
                {
                    b.Property<int>("FoodID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Availability")
                        .HasColumnType("int");

                    b.Property<string>("FoodCategory")
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("FoodDescription")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("ImageName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("NameOfFood")
                        .HasColumnType("nvarchar(50)");

                    b.Property<int>("PricePerItem")
                        .HasColumnType("int");

                    b.HasKey("FoodID");

                    b.ToTable("Foods");
                });
#pragma warning restore 612, 618
        }
    }
}
