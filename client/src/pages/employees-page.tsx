import { FC, useEffect } from "react";
import { Layout } from "../components/Layout/Layout";
import { Button } from "../components/Button/Button";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Table } from "antd";
import { useGetAllEmployeesQuery } from "../app/services/employees";
import { columnsTable } from "../constants/columnsTable";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../constants/paths";
import { useSelector } from "react-redux";
import { selectUser } from "../features/auth/authSlice";

export const Employees: FC = () => {

	const { data, isLoading } = useGetAllEmployeesQuery();
	const navigate = useNavigate();
	const user = useSelector(selectUser);

	const handleRedirectClick = () => navigate(PATHS.employeeAdd);

	useEffect(() => {

		if (!user) {
			navigate('/login');
		}

	}, [navigate, user]);

	return (
		<Layout>
			<Button
				type="primary"
				onClick={handleRedirectClick}
				icon={<PlusCircleOutlined />}
			>
				Добавить
			</Button>
			<Table
				loading={isLoading}
				dataSource={data}
				pagination={false}
				columns={columnsTable}
				rowKey={(record) => record.id}
				onRow={(record) => {
					return {
						onClick: () => navigate(`${PATHS.employee}/${record.id}`)
					}
				}}
			/>
		</Layout>
	);

};