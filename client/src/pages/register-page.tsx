import { FC, useEffect, useState } from "react";
import { Layout } from "../components/Layout/Layout";
import { Card, Form, Row, Space, Typography } from "antd";
import { Input } from "../components/Input/Input";
import { InputPassword } from "../components/InputPassword/InputPassword";
import { Button } from "../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../constants/paths";
import { useAppSelector } from "../app/hooks";
import { selectUser } from "../features/auth/authSlice";
import { useRegisterMutation } from "../app/services/auth";
import { User } from "@prisma/client";
import { isErrorWithMessage } from "../utils/isErrorWithMessage";
import { Error } from "../components/Error/Error";

type RegisterData = Omit<User, 'id'> & { confirmPassword: string };

export const Register: FC = () => {

	const navigate = useNavigate();
	const user = useAppSelector(selectUser);
	const [error, setError] = useState('');
	const [registerUser] = useRegisterMutation();

	const onRegister = async (data: RegisterData) => {

		try {

			await registerUser(data).unwrap();

			navigate('/');

		} catch (error) {


			const maybeError = isErrorWithMessage(error);

			if (maybeError) {
				setError(error.data.message);
			} else {

				setError('Неизввестная ошибка');

			}
		}

	};

	useEffect(() => {

		if (user) {

			navigate('/');

		}

	}, [user, navigate]);

	return (
		<Layout>
			<Row align='middle' justify='center'>
				<Card title='Зарегистрируйтесь' style={{ width: '30rem' }}>
					<Form onFinish={onRegister} >
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
						<Error message={error} />
					</Space>
				</Card>
			</Row>
		</Layout>
	);

};