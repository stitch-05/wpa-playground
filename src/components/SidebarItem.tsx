import { h } from 'preact';
import { Link, Match } from 'preact-router/match';
import { Nav } from 'react-bootstrap';

export interface IProps {
  url: string
  name: string
  icon?: any
  iconActive?: any
}

const SidebarItem = ({
  url,
  name,
  icon,
  iconActive
}: IProps) => (
	<Nav.Item as="li">
    <Match path={url}>
    {
      ({ matches }: any) => (
        <Link className={`nav-link ${matches ? 'active' : 'link-secondary'}`} href={url}>
          <span className=" me-2">{matches ? (iconActive || icon) : icon}</span>
          {name}
        </Link>
      )
    }
    </Match>
  </Nav.Item>
);

export default SidebarItem;
