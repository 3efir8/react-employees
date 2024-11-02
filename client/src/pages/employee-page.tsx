import { FC, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useGetEmployeeQuery, useRemoveEmployeeMutation } from "../app/services/employees";
import { useAppSelector } from "../app/hooks";
import { selectUser } from "../features/auth/authSlice";
import { Layout } from "../components/Layout/Layout";
import { Descriptions, Divider, Modal, Space } from "antd";
import { Button } from "../components/Button/Button";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Error } from "../components/Error/Error";
import { PATHS } from "../constants/paths";
import { isErrorWithMessage } from "../utils/isErrorWithMessage";

export const Employee: FC = () => {

	const navigate = useNavigate();
	const [error, setError] = useState('');
	const params = useParams<{ id: string }>();
	const [isModal, setIsModal] = useState(false);
	const { data, isLoading } = useGetEmployeeQuery(params.id || '');
	const [removeEmployee] = useRemoveEmployeeMutation();
	const user = useAppSelector(selectUser);

	const handleShowModal = () => {
		setIsModal(true);
	};

	const handleHideModal = () => {
		setIsModal(false);
	};

	const handleRemoveUser = async () => {

		handleHideModal();

		try {

			await removeEmployee(data!.id).unwrap();

			navigate(`${PATHS.status}/deleted`)

		} catch (error) {

			const maybeError = isErrorWithMessage(error);

			if (maybeError) {

				setError(error.data.message);

			} else {

				setError('Неизвестная ошибка');

			}

		}

	}

	if (isLoading) {

		return <h1 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>Загрузка...</h1>

	}

	if (!data) {
		return <Navigate to='/' />
	}

	return (
		<Layout>
			<Descriptions title='Информация о сотруднике' bordered>
				<Descriptions.Item label='Имя' span={3} >
					{`${data.firstName} ${data.lastName}`}
				</Descriptions.Item>
				<Descriptions.Item label='Возраст' span={3} >
					{data.age}
				</Descriptions.Item>
				<Descriptions.Item label='Адрес' span={3} >
					{data.address}
				</Descriptions.Item>
			</Descriptions>
			{
				user?.id === data.userId && (
					<>
						<Divider orientation="left">
							Действия
						</Divider>
						<Space>
							<Link to={`/employee/edit/${data.id}`}>
								<Button
									shape="round"
									type="default"
									icon={<EditOutlined />}
								>
									Редактировать
								</Button>
							</Link>
							<Button
								shape='round'
								danger
								onClick={handleShowModal}
								icon={<DeleteOutlined />}
							>
								Удалить
							</Button>
						</Space>
					</>
				)
			}
			<Error message={error} />
			<Modal
				title='Подтвердите удаление'
				open={isModal}
				onOk={handleRemoveUser}
				onCancel={handleHideModal}
				okText='Подтвердить'
				cancelText='Отменить'
			>
				Вы действительно хотите удалить сотрудника из таблицы?
			</Modal>
		</Layout>
	);

};