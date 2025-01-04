type GetResearchActivitiesQueryParams = {
  userId?: string;
  searchByKey?: string;
  searchByValue?: string;
  sortByKey?: string;
  sortByOrder?: 'asc' | 'desc';
};

export default GetResearchActivitiesQueryParams;
