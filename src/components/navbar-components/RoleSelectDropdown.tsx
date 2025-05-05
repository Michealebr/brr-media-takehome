import Roles from '../../assets/user.svg';
import { useUser } from '../../context/UserContext';

type Role = 'admin' | 'staff' | 'user';

const defaultEmails: Record<Role, string> = {
  admin: 'admin@brrmedia.co.uk',
  staff: 'staff@brrmedia.co.uk',
  user: 'user@brrmedia.co.uk',
};

const RoleSelectDropdown = () => {
  const { role, setRole, setEmail, isLoading, setIsLoading } = useUser();
  //   const [loading, setLoading] = useState(false);

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // select's role and is valid role
    const selectedRole = e.target.value as Role;

    // i want the page to load when i switch roles
    setIsLoading(true);
    setTimeout(() => {
      // updates global state to new role
      setRole(selectedRole);
      // uses selected role to to get the email of selected role and sets that as global email
      setEmail(defaultEmails[selectedRole]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="text-sm flex">
      <label className="mr-2 sr-only">Role:</label>
      <div className="flex text-sm items-center">
        <img className="mr-4 h-[18px]" src={Roles} alt="home icon" />
        {/* Select Role */}
        <select
          value={role}
          onChange={handleRoleChange}
          className="rounded cursor-pointer appearance-none text-sm  border border-gray-300 px-4 py-1  rounded focus:outline-none"
          disabled={isLoading}
        >
            
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
          <option value="user">User</option>
        </select>
      </div>
    </div>
  );
};

export default RoleSelectDropdown;
