import { FC } from "react";
import { Layout } from "../components/Layout/Layout";
import { Card, Form, Row, Space, Typography } from "antd";
import { Input } from "../components/Input/Input";
import { InputPassword } from "../components/InputPassword/InputPassword";
import { Button } from "../components/Button/Button";
import { Link } from "react-router-dom";
import { PATHS } from "../constants/paths";

export const Login: FC = () => {

	return (
		<Layout>
			<Row align='middle' justify='center'>
				<Card title='Войдите' style={{ width: '30rem' }}>
					<Form onFinish={() => null}>
						<Input
							type="email"
							name="email"
							placeholder="Email"
						/>
						<InputPassword
							name="password"
							placeholder="Пароль"
						/>
						<Button
							type="primary"
							htmlType="submit"
						>
							Войти
						</Button>
					</Form>
					<Space direction="vertical" size="large">
						<Typography.Text>
							Нет аккаунта?
							<Link to={PATHS.register}> Зарегистрироваться</Link>
						</Typography.Text>
					</Space>
				</Card>
			</Row>
		</Layout>
	);

};