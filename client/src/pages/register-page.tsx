import { FC } from "react";
import { Layout } from "../components/Layout/Layout";
import { Card, Form, Row, Space, Typography } from "antd";
import { Input } from "../components/Input/Input";
import { InputPassword } from "../components/InputPassword/InputPassword";
import { Button } from "../components/Button/Button";
import { Link } from "react-router-dom";
import { PATHS } from "../constants/paths";

export const Register: FC = () => {

	return (
		<Layout>
			<Row align='middle' justify='center'>
				<Card title='Зарегистрируйтесь' style={{ width: '30rem' }}>
					<Form onFinish={() => null}>
						<Input
							name="name"
							placeholder="Имя"
						/>
						<Input
							type="email"
							name="email"
							placeholder="Email"
						/>
						<InputPassword
							name="password"
							placeholder="Пароль"
						/>
						<InputPassword
							name="confirmPassword"
							placeholder="Повторите пароль"
						/>
						<Button
							type="primary"
							htmlType="submit"
						>
							Зарегистрироваться
						</Button>
					</Form>
					<Space direction="vertical" size="large">
						<Typography.Text>
							Уже зарегистрированы?
							<Link to={PATHS.login}> Войдите</Link>
						</Typography.Text>
					</Space>
				</Card>
			</Row>
		</Layout>
	);

};