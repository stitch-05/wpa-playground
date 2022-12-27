import { h } from 'preact';
import { HouseDoor, HouseDoorFill, Person, PersonFill } from 'react-bootstrap-icons';
import SidebarItem from './SidebarItem';


const Sidebar = () => (
	<div class="d-none d-md-flex flex-column flex-shrink-0 p-3 border-end" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
      <span class="fs-4">wpa playground</span>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <SidebarItem url="/" name="Home" icon={<HouseDoor />} iconActive={<HouseDoorFill />} />
      <SidebarItem url="/profile" name="Profile" icon={<Person />} iconActive={<PersonFill />} />
    </ul>
    <hr />
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
        <strong>mdo</strong>
      </a>
    </div>
  </div>
);

export default Sidebar;
