import { FC } from "react";
import { Form, Input as AntInput } from "antd";

interface IPropsInput {
	name: string;
	type?: string;
	placeholder: string;
}

export const Input: FC<IPropsInput> = ({
	name,
	type = 'text',
	placeholder,
}) => {

	return (
		<Form.Item
			name={name}
			shouldUpdate={true}
			rules={[{ required: true, message: 'Обязательное поле' }]}
		>
			<AntInput
				placeholder={placeholder}
				type={type}
				size="large"
			/>
		</Form.Item>
	);

};