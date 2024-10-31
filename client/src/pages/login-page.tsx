import { FC, useState } from "react";
import { Layout } from "../components/Layout/Layout";
import { Card, Form, Row, Space, Typography } from "antd";
import { Input } from "../components/Input/Input";
import { InputPassword } from "../components/InputPassword/InputPassword";
import { Button } from "../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../constants/paths";
import { useLoginMutation, UserData } from "../app/services/auth";
import { isErrorWithMessage } from "../utils/isErrorWithMessage";
import { Error } from "../components/Error/Error";

export const Login: FC = () => {

	const navigate = useNavigate();
	const [loginUser, loginUserResult] = useLoginMutation();
	const [error, setError] = useState('');

	const onLogin = async (data: UserData) => {

		try {

			await loginUser(data).unwrap();

			navigate('/')

		} catch (err) {

			const maybeError = isErrorWithMessage(err);

			if (maybeError) {
				setError(err.data.message);
			} else {
				setError('Неизвестная ошибка');
			}

		}

	};

	return (
		<Layout>
			<Row align='middle' justify='center'>
				<Card title='Войдите' style={{ width: '30rem' }}>
					<Form onFinish={onLogin}>
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
						<Error message={error} />
					</Space>
				</Card>
			</Row>
		</Layout>
	);

};