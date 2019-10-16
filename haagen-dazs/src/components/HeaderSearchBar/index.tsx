import React, { useState, useEffect } from "react";

import * as S from "./style";
import { ListItem } from "../../pages/AdminPage";
import { getApplicantsList } from "../../lib/api";

const inputChangeHandle = (
  e: React.ChangeEvent<HTMLInputElement>,
  setKeyword: (keyword: string) => void
) => {
  setKeyword(e.target.value);
};

const additionalFiltering = (
  lastUpdatedList: ListItem[],
  noncreKeywordsList: string[]
) => {
  const filtering = () => {
    let searchedList: ListItem[] = lastUpdatedList;

    noncreKeywordsList.forEach(keyword => {
      if (keyword.indexOf("@") !== -1) {
        searchedList = searchedList.filter(item =>
          item.email.includes(keyword)
        );
      } else if (/^[0-9]/.test(keyword[0])) {
        searchedList = searchedList.filter(
          item =>
            !!item.applicant_tel &&
            (item.email.includes(keyword) ||
              item.applicant_tel.includes(keyword))
        );
      } else if (/A-Za-z/.test(keyword[0])) {
        searchedList = searchedList.filter(item =>
          item.email.includes(keyword)
        );
      } else if (/([각-힣])/.test(keyword[0])) {
        searchedList = searchedList.filter(
          item =>
            (!!item.name && item.name.includes(keyword)) ||
            (!!item.school_name && item.school_name.includes(keyword))
        );
      }
    });
    return searchedList;
  };

  return filtering();
};

const inputBlurHandle = async (
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
  handleChangeUnsubmitted: () => void,
  lastUpdatedList: ListItem[],
  noncreKeywordsList: string[],
  searchApplicant: (filteredList: ListItem[]) => void,
  list: ListItem[],
  setNoncreKeywordsList: (noncreKeywordsList: string[]) => void
) => {
  if (e.target.value !== "") {
    e.currentTarget.value = "";
    let addedKeywordsList: string[] = [];
    if (keywordsList.indexOf(keyword) === -1) {
      addedKeywordsList = [...keywordsList, keyword];
      setKeywordsList(addedKeywordsList);

      const newNoncreKeywordsList: string[] = [...noncreKeywordsList];

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
          let filteredList: ListItem[];

          if (keyword.indexOf("@") !== -1) {
            filteredList = list.filter(item => item.email.includes(keyword));
            await searchApplicant(filteredList);
          } else if (/^[0-9]/.test(keyword[0])) {
            filteredList = list.filter(
              item =>
                !!item.applicant_tel &&
                (item.email.includes(keyword) ||
                  item.applicant_tel.includes(keyword))
            );
            await searchApplicant(filteredList);
          } else if (/A-Za-z/.test(keyword[0])) {
            filteredList = list.filter(item => item.email.includes(keyword));
            await searchApplicant(filteredList);
          } else if (/([각-힣])/.test(keyword[0])) {
            filteredList = list.filter(
              item =>
                (!!item.name && item.name.includes(keyword)) ||
                (!!item.school_name && item.school_name.includes(keyword))
            );
            await searchApplicant(filteredList);
          }

          newNoncreKeywordsList.push(keyword);
          setNoncreKeywordsList(newNoncreKeywordsList);

          break;
      }

      const listItem = await additionalFiltering(
        lastUpdatedList,
        newNoncreKeywordsList
      );

      await searchApplicant(listItem);

      setKeyword("");
    }
  }
};

const inputKeyDownHandle = async (
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
  handleChangeUnsubmitted: () => void,
  lastUpdatedList: ListItem[],
  list: ListItem[],
  searchApplicant: (filteredList: ListItem[]) => void,
  noncreKeywordsList: string[],
  setNoncreKeywordsList: (noncreKeywordsList: string[]) => void
) => {
  if (e.keyCode === 8 && (keyword === "" || keyword === undefined)) {
    const popedKeyWordsList = [...keywordsList];
    const deletedWord = popedKeyWordsList.pop();
    setKeywordsList(popedKeyWordsList);

    const newNoncreKeywordsList: string[] = [...noncreKeywordsList];

    switch (deletedWord) {
      case "대전":
        await handleChangeDaejeonCheckbox();
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
        newNoncreKeywordsList.pop();
        setNoncreKeywordsList(newNoncreKeywordsList);
        break;
    }

    const listItem = await additionalFiltering(
      lastUpdatedList,
      newNoncreKeywordsList
    );

    await searchApplicant(listItem);
  } else if (e.keyCode === 13 && keyword !== "") {
    e.currentTarget.value = "";
    const addedKeywordsList = [...keywordsList, keyword];
    setKeywordsList(addedKeywordsList);

    const newNoncreKeywordsList: string[] = [...noncreKeywordsList];

    switch (keyword) {
      case "대전":
        handleChangeDaejeonCheckbox();
        break;
      case "전국":
        await handleChangeNationwideCheckbox();
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
        let filteredList: ListItem[];

        if (keyword.indexOf("@") !== -1) {
          filteredList = list.filter(item => item.email.includes(keyword));
          await searchApplicant(filteredList);
        } else if (/^[0-9]/.test(keyword[0])) {
          filteredList = list.filter(
            item =>
              !!item.applicant_tel &&
              (item.email.includes(keyword) ||
                item.applicant_tel.includes(keyword))
          );
          await searchApplicant(filteredList);
        } else if (/A-Za-z/.test(keyword[0])) {
          filteredList = list.filter(item => item.email.includes(keyword));
          await searchApplicant(filteredList);
        } else if (/([각-힣])/.test(keyword[0])) {
          filteredList = list.filter(
            item =>
              (!!item.name && item.name.includes(keyword)) ||
              (!!item.school_name && item.school_name.includes(keyword))
          );
          await searchApplicant(filteredList);
        }

        newNoncreKeywordsList.push(keyword);
        setNoncreKeywordsList(newNoncreKeywordsList);

        break;
    }
    const listItem = await additionalFiltering(
      lastUpdatedList,
      newNoncreKeywordsList
    );

    await searchApplicant(listItem);

    setKeyword("");
  }
};

const checkCreteriaStatus = (
  keywordsList: string[],
  setKeywordsList: (keywordsList: string[]) => void,
  creteriaProps: boolean,
  creteriaText: string,
  newKeywordsList: string[],
  searchApplicant: (filteredList: ListItem[]) => void,
  noncreKeywordsList: string[],
  lastUpdatedList: ListItem[]
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

  const listItem = additionalFiltering(lastUpdatedList, noncreKeywordsList);
  searchApplicant(listItem);

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
  getApplicantsList: () => Promise<void>;
  lastUpdatedList: ListItem[];
  list: ListItem[];
  searchApplicant: (filteredList: ListItem[]) => void;
  pageType: "main" | "admin";
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
  handleChangeUnsubmittedCheckbox,
  lastUpdatedList,
  list,
  searchApplicant,
  pageType
}) => {
  const [keyword, setKeyword] = useState<string>("");
  const [keywordsList, setKeywordsList] = useState<string[]>([]);
  const [noncreKeywordsList, setNoncreKeywordsList] = useState<string[]>([]);

  useEffect(() => {
    if (pageType === "admin") {
      let newKeywordsList = [...keywordsList];

      newKeywordsList = checkCreteriaStatus(
        keywordsList,
        setKeywordsList,
        isDaejeonSelected,
        "대전",
        newKeywordsList,
        searchApplicant,
        noncreKeywordsList,
        lastUpdatedList
      );

      searchApplicant(additionalFiltering(lastUpdatedList, noncreKeywordsList));
    }
  },        [isDaejeonSelected]);

  useEffect(() => {
    if (pageType === "admin") {
      let newKeywordsList = [...keywordsList];

      newKeywordsList = checkCreteriaStatus(
        keywordsList,
        setKeywordsList,
        isNationwideSelected,
        "전국",
        newKeywordsList,
        searchApplicant,
        noncreKeywordsList,
        lastUpdatedList
      );

      searchApplicant(additionalFiltering(lastUpdatedList, noncreKeywordsList));
    }
  },        [isNationwideSelected]);

  useEffect(() => {
    if (pageType === "admin") {
      let newKeywordsList = [...keywordsList];

      newKeywordsList = checkCreteriaStatus(
        keywordsList,
        setKeywordsList,
        isUnpaidSelected,
        "미납자",
        newKeywordsList,
        searchApplicant,
        noncreKeywordsList,
        lastUpdatedList
      );

      searchApplicant(additionalFiltering(lastUpdatedList, noncreKeywordsList));
    }
  },        [isUnpaidSelected]);

  useEffect(() => {
    if (pageType === "admin") {
      let newKeywordsList = [...keywordsList];

      newKeywordsList = checkCreteriaStatus(
        keywordsList,
        setKeywordsList,
        isNotArrivedSelected,
        "원서 미도착",
        newKeywordsList,
        searchApplicant,
        noncreKeywordsList,
        lastUpdatedList
      );

      searchApplicant(additionalFiltering(lastUpdatedList, noncreKeywordsList));
    }
  },        [isNotArrivedSelected]);

  useEffect(() => {
    if (pageType === "admin") {
      let newKeywordsList = [...keywordsList];

      newKeywordsList = checkCreteriaStatus(
        keywordsList,
        setKeywordsList,
        isGeneralSelected,
        "일반전형",
        newKeywordsList,
        searchApplicant,
        noncreKeywordsList,
        lastUpdatedList
      );

      searchApplicant(additionalFiltering(lastUpdatedList, noncreKeywordsList));
    }
  },        [isGeneralSelected]);

  useEffect(() => {
    if (pageType === "admin") {
      let newKeywordsList = [...keywordsList];

      newKeywordsList = checkCreteriaStatus(
        keywordsList,
        setKeywordsList,
        isSocialIntegrationSelected,
        "사회통합",
        newKeywordsList,
        searchApplicant,
        noncreKeywordsList,
        lastUpdatedList
      );

      searchApplicant(additionalFiltering(lastUpdatedList, noncreKeywordsList));
    }
  },        [isSocialIntegrationSelected]);

  useEffect(() => {
    if (pageType === "admin") {
      let newKeywordsList = [...keywordsList];

      newKeywordsList = checkCreteriaStatus(
        keywordsList,
        setKeywordsList,
        isMeisterSelected,
        "마이스터전형",
        newKeywordsList,
        searchApplicant,
        noncreKeywordsList,
        lastUpdatedList
      );

      searchApplicant(additionalFiltering(lastUpdatedList, noncreKeywordsList));
    }
  },        [isMeisterSelected]);

  useEffect(() => {
    if (pageType === "admin") {
      let newKeywordsList = [...keywordsList];

      newKeywordsList = checkCreteriaStatus(
        keywordsList,
        setKeywordsList,
        isUnsubmittedSelected,
        "미제출자",
        newKeywordsList,
        searchApplicant,
        noncreKeywordsList,
        lastUpdatedList
      );

      searchApplicant(additionalFiltering(lastUpdatedList, noncreKeywordsList));
    }
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
              handleChangeUnsubmittedCheckbox,
              lastUpdatedList,
              noncreKeywordsList,
              searchApplicant,
              list,
              setNoncreKeywordsList
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
              handleChangeUnsubmittedCheckbox,
              lastUpdatedList,
              list,
              searchApplicant,
              noncreKeywordsList,
              setNoncreKeywordsList
            )
          }
        />
      </>
    </div>
  );
};
export default HeaderSearchBar;
