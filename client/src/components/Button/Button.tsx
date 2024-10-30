import { Form, Button as AntButton } from "antd";
import { FC, ReactNode } from "react";

interface IPropsCustomButton {
	children: ReactNode;
	htmlType?: 'button' | 'submit' | 'reset' | undefined;
	onClick?: () => void;
	type?: "default" | "link" | "ghost" | "text" | "primary" | "dashed" | undefined;
	danger?: boolean;
	loading?: boolean;
	shape?: "default" | "circle" | "round" | undefined;
	icon?: ReactNode;
}

export const Button: FC<IPropsCustomButton> = ({
	children,
	htmlType = 'button',
	onClick,
	type,
	danger,
	loading,
	shape,
	icon
}) => {

	return (
		<Form.Item>
			<AntButton
				htmlType={htmlType}
				onClick={onClick}
				type={type}
				danger={danger}
				loading={loading}
				shape={shape}
				icon={icon}
			>
				{children}
			</AntButton>
		</Form.Item>
	);

};