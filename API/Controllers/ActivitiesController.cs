using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController:BaseApiController
    {
        
        private readonly DataContext _context;

        public ActivitiesController(DataContext context){
            _context = context;
           
        }
        [HttpGet] //api/activities
        public async Task<ActionResult<List<Activity>>> GetActivity(){
            return await _context.MyProperty.ToListAsync();
        }
        
        [HttpGet("{id}")] //api/activities/jdklfsjld
        public async Task<ActionResult<Activity>> GetActivity(Guid id){
            return await _context.MyProperty.FindAsync(id);
        }
    }
}