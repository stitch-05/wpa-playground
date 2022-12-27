import { h } from 'preact';
import { Link, Match } from 'preact-router/match';
import { Nav } from 'react-bootstrap';
import '../style/MobileMenuItem.scss';

export interface IProps {
  url: string
  icon: any
  iconActive?: any
}

const SidebarItem = ({
  url,
  icon,
  iconActive
}: IProps) => (
  <Nav.Item as="li">
  <Match path={url}>
    {
      ({ matches }: any) => (
        <Link className={`nav-link ${matches ? 'active' : 'link-secondary'}`} href={url}>
          {matches ? (iconActive || icon) : icon}
        </Link>
      )
    }
  </Match>
  </Nav.Item>
);

export default SidebarItem;
