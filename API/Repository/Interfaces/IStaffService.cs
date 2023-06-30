using RoleBasedAuthorization.Models;

namespace RoleBasedAuthorization.Repository.Interfaces
{
    public interface IStaffService
    {
        public Task<Staff> PostStaff(Staff staff);
    }
}
