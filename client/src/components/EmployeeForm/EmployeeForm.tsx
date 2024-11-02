import { FC } from "react";
import { Employee } from "@prisma/client";
import { Card, Form, Space } from "antd";
import { Input } from "../Input/Input";
import { Error } from "../Error/Error";
import { Button } from "../Button/Button";

interface IPropsEmployeeForm<T> {
	onFinish: (values: T) => void;
	btnText: string;
	title: string;
	error?: string | undefined;
	employee?: T;
}

export const EmployeeForm: FC<IPropsEmployeeForm<Employee>> = ({
	onFinish,
	btnText,
	title,
	error,
	employee
}) => {

	return (
		<Card title={title} style={{ width: '30rem' }}>
			<Form
				name="employee-form"
				onFinish={onFinish}
				initialValues={employee}
			>
				<Input type="text" name="firstName" placeholder="Имя" />
				<Input type="text" name="lastName" placeholder="Фамилия" />
				<Input type="number" name="age" placeholder="Возраст" />
				<Input type="text" name="address" placeholder="Адрес" />
				<Space>
					<Error message={error} />
					<Button htmlType="submit" >
						{btnText}
					</Button>
				</Space>
			</Form>
		</Card>
	);

};