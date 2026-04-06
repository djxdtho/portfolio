[Setup]
AppName=FitTrack
AppVersion=1.0.0
AppPublisher=AA Elements
AppPublisherURL=https://github.com/djxdtho
DefaultDirName={autopf}\FitTrack
DefaultGroupName=FitTrack
OutputDir=..\installer
OutputBaseFilename=FitTrack-Setup
Compression=lzma
SolidCompression=yes
WizardStyle=modern
PrivilegesRequired=admin
ArchitecturesInstallIn64BitMode=x64

[Files]
Source: "fittrack.exe"; DestDir: "{app}"; Flags: ignoreversion
Source: "flutter_windows.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "sqlite3.dll"; DestDir: "{app}"; Flags: ignoreversion
Source: "data\*"; DestDir: "{app}\data"; Flags: ignoreversion recursesubdirs createallsubdirs

[Icons]
Name: "{group}\FitTrack"; Filename: "{app}\fittrack.exe"
Name: "{group}\Uninstall FitTrack"; Filename: "{uninstallexe}"
Name: "{autodesktop}\FitTrack"; Filename: "{app}\fittrack.exe"

[Run]
Filename: "{app}\fittrack.exe"; Description: "Launch FitTrack"; Flags: postinstall nowait skipifsilent
