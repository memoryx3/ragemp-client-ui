export enum RemoteEvent {
  Login = 'Remote:Authentication:Login',
  Registration = 'Remote:Authentication:Registration',

  CharacterSelect = 'Remote:Character:Select',
  CharacterDelete = 'Remote:Character:Delete',
  CharacterSpawnSelect = 'Remote:Character:SpawnSelect',
  CharacterEstablishContact = 'Remote:Character:EstablishContact',

  CharacterCreatorCreate = 'Remote:CharacterCreator:Create',
  CharacterCreatorChangeGender = 'Remote:CharacterCreator:ChangeGender',

  BankOpenCard = 'Remote:Bank:OpenCard',
  BankWithdraw = 'Remote:Bank:Withdraw',
  BankDeposit = 'Remote:Bank:Deposit',
  BankSend = 'Remote:Bank:Send',

  GasStationFillVehicle = 'Remote:GasStation:FillVehicle',
  VehicleSave = 'Remote:VehicleSave',
  VehicleToggleEngine = 'Remote:Vehicle:ToggleEngine',
  VehicleToggleLocked = 'Remote:Vehicle:ToggleLocked',

  HouseBuy = 'Remote:House:Buy',
  HouseSetOnSellState = 'Remote:House:SetOnSaleState',
  HouseSetLockState = 'Remote:House:SetLockState',
  HouseEnterExit = 'Remote:House:EnterExit',

  VoiceAddListener = 'Remote:Voice:AddListener',
  VoiceRemoveListener = 'Remote:Voice:RemoveListener'
}