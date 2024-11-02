import { Button, Result, Row } from "antd";
import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { STATUSES } from "../constants/statuses";

export const Status: FC = () => {

	const { status } = useParams();

	return (
		<Row
			align='middle'
			justify='center'
			style={{ width: '100%' }}
		>
			<Result
				status={status ? 'success' : 404}
				title={status ? STATUSES[status] : 'Не найдено'}
				extra={
					<Button key='dashboard'>
						<Link to='/'>На главную</Link>
					</Button>
				}
			/>
		</Row>
	);

};