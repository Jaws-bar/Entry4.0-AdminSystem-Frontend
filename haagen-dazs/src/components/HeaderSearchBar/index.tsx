import React, { useState, useEffect } from "react";

import * as S from "./style";
import { Creteria } from "../../lib/api/index";

const inputChangeHandle = (
  e: React.ChangeEvent<HTMLInputElement>,
  setKeyword: (keyword: string) => void
) => {
  setKeyword(e.target.value);
};

const inputBlurHandle = (
  e: React.ChangeEvent<HTMLInputElement>,
  setKeyword: (keyword: string) => void,
  setKeywordsList: (keywordsList: string[]) => void,
  keywordsList: string[],
  keyword: string,
  handleChangeDaejeonCheckbox: () => void,
  handleChangeNationwideCheckbox: () => void,
  handleChangeUnpaidCheckbox: () => void,
  handleChangeNotArrivedCheckbox: () => void,
  handleChangeGeneralCheckbox: () => void,
  handleChangeSocialIntegrationCheckbox: () => void,
  handleChangeMeisterCheckbox: () => void,
  handleChangeUnsubmitted: () => void
) => {
  if (e.target.value !== "") {
    let addedKeywordsList: string[] = [];
    if (keywordsList.indexOf(keyword) === -1) {
      addedKeywordsList = [...keywordsList, keyword];
      setKeywordsList(addedKeywordsList);

      switch (keyword) {
        case "대전":
          handleChangeDaejeonCheckbox();
          break;
        case "전국":
          handleChangeNationwideCheckbox();
          break;
        case "미납자":
          handleChangeUnpaidCheckbox();
          break;
        case "원서 미도착":
          handleChangeNotArrivedCheckbox();
          break;
        case "일반전형":
          handleChangeGeneralCheckbox();
          break;
        case "사회통합":
          handleChangeSocialIntegrationCheckbox();
          break;
        case "마이스터전형":
          handleChangeMeisterCheckbox();
          break;
        case "미제출자":
          handleChangeUnsubmitted();
          break;
        default:
          break;
      }
    }

    setKeyword("");
    e.target.value = "";
  }
};

const inputKeyDownHandle = (
  e: React.KeyboardEvent<HTMLInputElement>,
  keyword: string,
  keywordsList: string[],
  setKeywordsList: (keywordsList: string[]) => void,
  setKeyword: (keyword: string) => void,
  handleChangeDaejeonCheckbox: () => void,
  handleChangeNationwideCheckbox: () => void,
  handleChangeUnpaidCheckbox: () => void,
  handleChangeNotArrivedCheckbox: () => void,
  handleChangeGeneralCheckbox: () => void,
  handleChangeSocialIntegrationCheckbox: () => void,
  handleChangeMeisterCheckbox: () => void,
  handleChangeUnsubmitted: () => void
) => {
  if (e.keyCode === 8 && (keyword === "" || keyword === undefined)) {
    const popedKeyWordsList = [...keywordsList];
    const deletedWord = popedKeyWordsList.pop();
    setKeywordsList(popedKeyWordsList);
    switch (deletedWord) {
      case "대전":
        handleChangeDaejeonCheckbox();
        break;
      case "전국":
        handleChangeNationwideCheckbox();
        break;
      case "미납자":
        handleChangeUnpaidCheckbox();
        break;
      case "원서 미도착":
        handleChangeNotArrivedCheckbox();
        break;
      case "일반전형":
        handleChangeGeneralCheckbox();
        break;
      case "사회통합":
        handleChangeSocialIntegrationCheckbox();
        break;
      case "마이스터전형":
        handleChangeMeisterCheckbox();
        break;
      case "미제출자":
        handleChangeUnsubmitted();
        break;
      default:
        break;
    }
  } else if (e.keyCode === 13 && keyword !== "") {
    const addedKeywordsList = [...keywordsList, keyword];
    setKeywordsList(addedKeywordsList);

    switch (keyword) {
      case "대전":
        handleChangeDaejeonCheckbox();
        break;
      case "전국":
        handleChangeNationwideCheckbox();
        break;
      case "미납자":
        handleChangeUnpaidCheckbox();
        break;
      case "원서 미도착":
        handleChangeNotArrivedCheckbox();
        break;
      case "일반전형":
        handleChangeGeneralCheckbox();
        break;
      case "사회통합":
        handleChangeSocialIntegrationCheckbox();
        break;
      case "마이스터전형":
        handleChangeMeisterCheckbox();
        break;
      case "미제출자":
        handleChangeUnsubmitted();
        break;
      default:
        break;
    }

    setKeyword("");
    e.currentTarget.value = "";
  }
};

const checkCreteriaStatus = (
  keywordsList: string[],
  setKeywordsList: (keywordsList: string[]) => void,
  creteriaProps: boolean,
  creteriaText: string,
  newKeywordsList: string[]
): string[] => {
  let editedKeywordsList: string[] = [...newKeywordsList];

  if (creteriaProps && keywordsList.indexOf(creteriaText) === -1) {
    editedKeywordsList.push(creteriaText);
  } else if (keywordsList.indexOf(creteriaText) !== -1 && !creteriaProps) {
    editedKeywordsList = editedKeywordsList.filter(
      keyword => keyword !== creteriaText
    );
  }
  setKeywordsList(editedKeywordsList);

  return editedKeywordsList;
};

interface Props {
  isDaejeonSelected: boolean;
  isNationwideSelected: boolean;
  isUnpaidSelected: boolean;
  isNotArrivedSelected: boolean;
  isGeneralSelected: boolean;
  isSocialIntegrationSelected: boolean;
  isMeisterSelected: boolean;
  isUnsubmittedSelected: boolean;
  handleChangeDaejeonCheckbox: () => void;
  handleChangeNationwideCheckbox: () => void;
  handleChangeUnpaidCheckbox: () => void;
  handleChangeNotArrivedCheckbox: () => void;
  handleChangeGeneralCheckbox: () => void;
  handleChangeSocialIntegrationCheckbox: () => void;
  handleChangeMeisterCheckbox: () => void;
  handleChangeUnsubmittedCheckbox: () => void;
  getApplicantsList: (body: Creteria) => Promise<void>;
}

const HeaderSearchBar: React.FC<Props> = ({
  isDaejeonSelected,
  isNationwideSelected,
  isUnpaidSelected,
  isNotArrivedSelected,
  isGeneralSelected,
  isSocialIntegrationSelected,
  isMeisterSelected,
  isUnsubmittedSelected,
  handleChangeDaejeonCheckbox,
  handleChangeNationwideCheckbox,
  handleChangeUnpaidCheckbox,
  handleChangeNotArrivedCheckbox,
  handleChangeGeneralCheckbox,
  handleChangeSocialIntegrationCheckbox,
  handleChangeMeisterCheckbox,
  handleChangeUnsubmittedCheckbox
}) => {
  const [keyword, setKeyword] = useState<string>();
  const [keywordsList, setKeywordsList] = useState<string[]>([]);

  useEffect(() => {
    let newKeywordsList = [...keywordsList];

    newKeywordsList = checkCreteriaStatus(
      keywordsList,
      setKeywordsList,
      isDaejeonSelected,
      "대전",
      newKeywordsList
    );
  },        [isDaejeonSelected]);

  useEffect(() => {
    let newKeywordsList = [...keywordsList];

    newKeywordsList = checkCreteriaStatus(
      keywordsList,
      setKeywordsList,
      isNationwideSelected,
      "전국",
      newKeywordsList
    );
  },        [isNationwideSelected]);

  useEffect(() => {
    let newKeywordsList = [...keywordsList];

    newKeywordsList = checkCreteriaStatus(
      keywordsList,
      setKeywordsList,
      isUnpaidSelected,
      "미납자",
      newKeywordsList
    );
  },        [isUnpaidSelected]);

  useEffect(() => {
    let newKeywordsList = [...keywordsList];

    newKeywordsList = checkCreteriaStatus(
      keywordsList,
      setKeywordsList,
      isNotArrivedSelected,
      "원서 미도착",
      newKeywordsList
    );
  },        [isNotArrivedSelected]);

  useEffect(() => {
    let newKeywordsList = [...keywordsList];

    newKeywordsList = checkCreteriaStatus(
      keywordsList,
      setKeywordsList,
      isGeneralSelected,
      "일반전형",
      newKeywordsList
    );
  },        [isGeneralSelected]);

  useEffect(() => {
    let newKeywordsList = [...keywordsList];

    newKeywordsList = checkCreteriaStatus(
      keywordsList,
      setKeywordsList,
      isSocialIntegrationSelected,
      "사회통합",
      newKeywordsList
    );
  },        [isSocialIntegrationSelected]);

  useEffect(() => {
    let newKeywordsList = [...keywordsList];

    newKeywordsList = checkCreteriaStatus(
      keywordsList,
      setKeywordsList,
      isMeisterSelected,
      "마이스터전형",
      newKeywordsList
    );
  },        [isMeisterSelected]);

  useEffect(() => {
    let newKeywordsList = [...keywordsList];

    newKeywordsList = checkCreteriaStatus(
      keywordsList,
      setKeywordsList,
      isUnsubmittedSelected,
      "미제출자",
      newKeywordsList
    );
  },        [isUnsubmittedSelected]);

  return (
    <div>
      <>
        {keywordsList.length >= 1 &&
          keywordsList.map((keyword, index) => {
            return (
              <div key={index}>
                <div>
                  {index !== 0 && <S.Keyword>,</S.Keyword>}
                  <S.Keyword>#</S.Keyword>
                  <S.Keyword>{keyword}</S.Keyword>
                </div>
              </div>
            );
          })}
        <S.SearchInput
          type="text"
          placeholder={keywordsList.length > 0 ? "" : "검색어를 입력해주세요."}
          onChange={e => inputChangeHandle(e, setKeyword)}
          onBlur={e =>
            inputBlurHandle(
              e,
              setKeyword,
              setKeywordsList,
              keywordsList,
              keyword,
              handleChangeDaejeonCheckbox,
              handleChangeNationwideCheckbox,
              handleChangeUnpaidCheckbox,
              handleChangeNotArrivedCheckbox,
              handleChangeGeneralCheckbox,
              handleChangeSocialIntegrationCheckbox,
              handleChangeMeisterCheckbox,
              handleChangeUnsubmittedCheckbox
            )
          }
          onKeyUp={e =>
            inputKeyDownHandle(
              e,
              keyword,
              keywordsList,
              setKeywordsList,
              setKeyword,
              handleChangeDaejeonCheckbox,
              handleChangeNationwideCheckbox,
              handleChangeUnpaidCheckbox,
              handleChangeNotArrivedCheckbox,
              handleChangeGeneralCheckbox,
              handleChangeSocialIntegrationCheckbox,
              handleChangeMeisterCheckbox,
              handleChangeUnsubmittedCheckbox
            )
          }
        />
      </>
    </div>
  );
};
export default HeaderSearchBar;
