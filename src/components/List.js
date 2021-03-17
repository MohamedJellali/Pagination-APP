import React, { useState } from "react";
import Card from "./Card";
import "./Card.css";

import { paginate } from "../paginate";
import Pagination from "../pagination/pagination";

function List({ users, searched, searchedage, searchedsalary }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPageData = () => {
    const paginationData = paginate(users, currentPage, pageSize);
    if (searched) {
      return {
        totalCount: users
          .filter((user) =>
            user.employee_name.toLowerCase().includes(searched.toLowerCase())
          )
          .map((user) => {
            return <Card key={user.id} user={user} />;
          }).length,
        data: paginationData,
      };
    } else if (searchedage) {
      return {
        totalCount: users
          .filter((user) =>
            user.employee_age.toLowerCase().includes(searchedage.toLowerCase())
          )
          .map((user) => {
            return <Card key={user.id} user={user} />;
          }).length,
        data: paginationData,
      };
    } else if (searchedsalary) {
      return {
        totalCount: users
          .filter((user) =>
            user.employee_salary
              .toLowerCase()
              .includes(searchedsalary.toLowerCase())
          )
          .map((user) => {
            return <Card key={user.id} user={user} />;
          }).length,
        data: paginationData,
      };
    }
    return { totalCount: users.length, data: paginationData };
  };

  const { totalCount, data } = getPageData();

  if (searched) {
    return (
      <div>
        <div className="affichage">
          {users
            .filter((user) =>
              user.employee_name.toLowerCase().includes(searched.toLowerCase())
            )
            .map((user) => {
              return <Card key={user.id} user={user} />;
            })}
        </div>
        <div>
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
          page {currentPage} of {Math.ceil(totalCount / pageSize)}
        </div>
      </div>
    );
  } else if (searchedage) {
    return (
      <div>
        <div className="affichage">
          {users
            .filter((user) =>
              user.employee_age
                .toLowerCase()
                .includes(searchedage.toLowerCase())
            )
            .map((user) => {
              return <Card key={user.id} user={user} />;
            })}
        </div>
        <div>
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
          page {currentPage} of {Math.ceil(totalCount / pageSize)}
        </div>
      </div>
    );
  } else if (searchedsalary) {
    return (
      <div>
        <div className="affichage">
          {users
            .filter((user) =>
              user.employee_salary
                .toLowerCase()
                .includes(searchedsalary.toLowerCase())
            )
            .map((user) => {
              return <Card key={user.id} user={user} />;
            })}
        </div>
        <div>
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
          page {currentPage} of {Math.ceil(totalCount / pageSize)}
        </div>
      </div>
    );
  }

  return (
    <div >
      <div className="affichage">
        {data.map((user) => {
          return <Card key={user.id} user={user} />;
        })}
      </div>
      <div>
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        page {currentPage} of {Math.ceil(totalCount / pageSize)}
      </div>
    </div>
  );
}

export default List;
