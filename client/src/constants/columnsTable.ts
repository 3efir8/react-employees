import { Employee } from "@prisma/client";
import { ColumnsType } from "antd/es/table";

export const columnsTable: ColumnsType<Employee> = [
	{
		title: "Имя",
		dataIndex: "firstName",
		key: "firstName",
	},
	{
		title: "Возраст",
		dataIndex: "age",
		key: "age",
	},
	{
		title: "Адрес",
		dataIndex: "address",
		key: "address",
	},
];