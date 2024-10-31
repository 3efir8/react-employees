import { FC } from "react";
import { useCurrentQuery } from "../../app/services/auth";
import styles from './Auth.module.css';

interface IPropsAuth {
	children: JSX.Element;
}

export const Auth: FC<IPropsAuth> = ({ children }) => {

	const { isLoading } = useCurrentQuery();

	if (isLoading) {
		return (
			<h1 className={styles.center}>
				Загрузка...
			</h1>
		);
	}

	return children;

};