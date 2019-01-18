using HeartBeatTracker.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace HeartBeatTracker.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext() :
          base("OktaConnectionString")
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        public DbSet<HeartRate> HeartRates { get; set; }
    }
}