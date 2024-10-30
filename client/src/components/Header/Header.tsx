import { FC } from "react";
import { Layout, Space, Typography } from "antd";
import { LoginOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import styles from './Header.module.css';

export const Header: FC = () => {

	return (
		<Layout.Header className={styles.header} >
			<Space>
				<TeamOutlined className={styles.teamIcon} />
				<Link to={PATHS.home}>
					<Button type="ghost">
						<Typography.Title level={1}>
							Сотрудники
						</Typography.Title>
					</Button>
				</Link>
			</Space>
			<Space>
				<Link to={PATHS.register}>
					<Button
						type="ghost"
						icon={<UserOutlined />}
					>
						Зарегистрироваться
					</Button>
				</Link>
				<Link to={PATHS.login}>
					<Button
						type="ghost"
						icon={<LoginOutlined />}
					>
						Войти
					</Button>
				</Link>
			</Space>
		</Layout.Header>
	);

};