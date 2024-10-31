import { FC } from "react";
import { Layout, Space, Typography } from "antd";
import { LoginOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import styles from './Header.module.css';
import { useSelector } from "react-redux";
import { logout, selectUser } from "../../features/auth/authSlice";
import { useAppDispatch } from "../../app/hooks";

export const Header: FC = () => {

	const user = useSelector(selectUser);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleLogoutClick = () => {

		dispatch(logout());
		document.cookie = 'token=\'\'; max-age=-1';
		navigate('/login');

	};

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
			{
				user ? (
					<Button
						type="ghost"
						icon={<LoginOutlined />}
						onClick={handleLogoutClick}
					>
						Выйти
					</Button>
				) : (
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
				)
			}
		</Layout.Header>
	);

};