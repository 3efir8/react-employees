import { FC, ReactNode } from "react";
import { Layout as AntLayout } from "antd";
import styles from './Layout.module.css';
import { Header } from "../Header/Header";

interface IPropsLayout {
	children: ReactNode
}

export const Layout: FC<IPropsLayout> = ({ children }) => {

	return (
		<div className={styles.main}>
			<AntLayout.Content style={{ height: '100%' }}>
				<Header />
				{children}
			</AntLayout.Content>
		</div>
	);

};