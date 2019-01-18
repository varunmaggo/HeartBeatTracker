using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using HeartBeatTracker.Data;
using HeartBeatTracker.Models;

namespace HeartBeatTracker.Controllers
{
    public class HeartRatesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/HeartRates
        public IQueryable<HeartRate> GetHeartRates()
        {
            return db.HeartRates;
        }

        // GET: api/HeartRates/5
        [ResponseType(typeof(HeartRate))]
        public async Task<IHttpActionResult> GetHeartRate(int id)
        {
            HeartRate heartRate = await db.HeartRates.FindAsync(id);
            if (heartRate == null)
            {
                return NotFound();
            }

            return Ok(heartRate);
        }

        // PUT: api/HeartRates/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutHeartRate(int id, HeartRate heartRate)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != heartRate.Id)
            {
                return BadRequest();
            }

            db.Entry(heartRate).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HeartRateExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/HeartRates
        [ResponseType(typeof(HeartRate))]
        public async Task<IHttpActionResult> PostHeartRate(HeartRate heartRate)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.HeartRates.Add(heartRate);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = heartRate.Id }, heartRate);
        }

        // DELETE: api/HeartRates/5
        [ResponseType(typeof(HeartRate))]
        public async Task<IHttpActionResult> DeleteHeartRate(int id)
        {
            HeartRate heartRate = await db.HeartRates.FindAsync(id);
            if (heartRate == null)
            {
                return NotFound();
            }

            db.HeartRates.Remove(heartRate);
            await db.SaveChangesAsync();

            return Ok(heartRate);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool HeartRateExists(int id)
        {
            return db.HeartRates.Count(e => e.Id == id) > 0;
        }
    }
}