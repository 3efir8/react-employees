import { FC, useEffect, useState } from "react";
import { Layout } from "../components/Layout/Layout";
import { Row } from "antd";
import { EmployeeForm } from "../components/EmployeeForm/EmployeeForm";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectUser } from "../features/auth/authSlice";
import { useAddEmployeeMutation } from "../app/services/employees";
import { Employee } from "@prisma/client";
import { PATHS } from "../constants/paths";
import { isErrorWithMessage } from "../utils/isErrorWithMessage";

export const AddEmployee: FC = () => {

	const [error, setError] = useState('');
	const navigate = useNavigate();
	const user = useAppSelector(selectUser);
	const [addEmployee] = useAddEmployeeMutation();

	const handleAddEmployee = async (data: Employee) => {

		try {

			await addEmployee(data).unwrap();

			navigate(`${PATHS.status}/created`);

		} catch (error) {

			const maybeError = isErrorWithMessage(error);

			if (maybeError) {

				setError(error.data.message);

			} else {

				setError('Неизвестная ошибка');

			}

		}

	};

	useEffect(() => {

		if (!user) {
			navigate('/login');
		}

	}, [navigate, user]);

	return (
		<Layout>
			<Row align='middle' justify='center'>
				<EmployeeForm
					title="Добавить сотрудника"
					btnText="Добавить"
					onFinish={handleAddEmployee}
					error={error}
				/>
			</Row>
		</Layout>
	);

};