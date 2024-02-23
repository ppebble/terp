export type ProfileSkillType = {
  userId: string;
  projectName: string;
  prjStartDate: string;
  prjEndDate: string;
  customer: string;
  affiliation: string;
  devField: string;
  devRoll: string;
  devDevice: string;
  devOs: string;
  devLang: string;
  devDbms: string;
  devTool: string;
  devNet: string;
  devComment: string;
};

export type ProfileAbilityType = {
  userId: string;
  abilityType: string;
  abilityName: string;
  proficiency: string;
  classCreteria: string;
};
export type ProfileCareerType = {
  userId: string;
  companyName: string;
  careerStart: string;
  careerEnd: string;
  hireTerm: number;
  mainCareer: string;
  spot: string;
  task: string;
  jobClassification: string;
};
export type ProfileEduType = {
  userId: string;
  educationName: string;
  eduStartDate: string;
  eduEndDate: string;
  eduDuration: number;
  organ: string;
};
export type ProfileIndividualProps = {
  abilityList: ProfileAbilityType[];
  careerList: ProfileCareerType[];
  eduList: ProfileEduType[];
  skillList: ProfileSkillType[];
};
