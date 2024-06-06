import "./UsersTable.css";
import { getAnyData } from "@/services/data-fetch/getAnyData";
import { UserRow } from "./UserRow/UserRow";
import { TranslateTextServer } from "../../TranslateText/TranslateTextServer";
import { BASE_URL } from "@/services/constants";
import { TableContainer } from "../TableContainer/TableContainer";
import { PaginationUI } from "@/components/Pagination/Pagination";

export async function UsersTable({ params }: { params: ITableParams['searchParams'] }) {
  const { users: { rows } } = await getAnyData<IUserDatabase>(`${BASE_URL}/api/get-users`); // refactor
  const page = Number(params?.page) || 1;
  const paginatedUsers = rows.slice(10 * (page - 1), page * 10);

  return (
    <div className="table_wrapper">
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th><TranslateTextServer translationKey="edit" /></th>
              <th><TranslateTextServer translationKey="firstName" /></th>
              <th><TranslateTextServer translationKey="lastName" /></th>
              <th><TranslateTextServer translationKey="email" /></th>
              <th><TranslateTextServer translationKey="birthDate" /></th>
              <th><TranslateTextServer translationKey="role" /></th>
              <th><TranslateTextServer translationKey="regDate" /></th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((item) => <UserRow item={item} key={item.id} />)}
          </tbody>
        </table>
      </TableContainer>
      <PaginationUI totalPages={rows.length} size={10} />
    </div>
  )
}
