import * as React from "react";

import { Header } from "../../utils";
import SearchCreteriaSelectBox from "../../components/SearchCreteriaSelectBox";
import ApplicantList from "../../components/ApplicantList";
import Unsubmitted from "../../components/ApplicantInfoView/Unsubmitted";
import Submitted from "../../components/ApplicantInfoView/Submitted";
import * as S from "./style";

const AdminPage: React.FC = () => (
  <>
    <Header />
    <S.AdminContentContainer>
      <S.ApplicantListContainer>
        <SearchCreteriaSelectBox />
        <ApplicantList />
      </S.ApplicantListContainer>
      <S.ApplicantInfoView>
        <Submitted />
      </S.ApplicantInfoView>
    </S.AdminContentContainer>
  </>
);

export default AdminPage;
