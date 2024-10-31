import { Alert } from "antd";
import { FC } from "react";

interface IPropsError {
	message: string;
}

export const Error: FC<IPropsError> = ({ message }) => {

	if (!message) {
		return null;
	}

	return <Alert message={message} type="error" />

};