using JWTAuthenticationApp.Interfaces;
using JWTAuthenticationApp.Models.DTO;
using JWTAuthenticationApp.Services;
using Microsoft.EntityFrameworkCore;
using RoleBasedAuthorization.Data;
using RoleBasedAuthorization.Models;
using RoleBasedAuthorization.Repository.Interfaces;
using System.Security.Cryptography;
using System.Text;

namespace RoleBasedAuthorization.Repository.Services
{
    public class StaffService : IStaffService
    {

        public RoleBasedAuthorizationDbContext _context;
        public StaffService(RoleBasedAuthorizationDbContext context)
        {
            _context = context;
        }


        public async Task<Staff> PostStaff(Staff staff)
        {

            _context.Staff.Add(staff);
            await _context.SaveChangesAsync();
            return staff;
        }
    }
}
