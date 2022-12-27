import { h } from 'preact';
import { Navbar } from 'react-bootstrap';
import { Bell, BellFill, HouseDoor, HouseDoorFill, Person, PersonFill, Search } from 'react-bootstrap-icons';
import MobileMenuItem from './MobileMenuItem';

const size = 28;

const personIcon = <Person size={size} />;
const personFillIcon = <PersonFill size={size} />;

const MobileMenu = () => (
  <Navbar className="nav nav-fill fixed-bottom navbar-expand-md border-top d-md-none" as="ul">
    <MobileMenuItem url="/" icon={<HouseDoor size={size} />} iconActive={<HouseDoorFill size={size} />} />
    <MobileMenuItem url="/search" icon={<Search size={size} />} />
    <MobileMenuItem url="/notifications" icon={<Bell size={size} />} iconActive={<BellFill size={size} />} />
    <MobileMenuItem url="/profile" icon={personIcon} iconActive={personFillIcon} />
  </Navbar>
);

export default MobileMenu;
