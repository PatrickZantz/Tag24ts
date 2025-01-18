enum Permissions {
    None = 0,
    Read = 1,
    Write = 2,
    Execute = 4,
    Delete = 8
  }
  
  function checkPermissions(permission: Permissions): void {
    console.log(`Überprüfe Berechtigungen für: ${Permissions[permission]}`);
  
    if (permission & Permissions.Delete) {
      console.log("- Löschen erlaubt");
    }
    if (permission & Permissions.Execute) {
      console.log("- Ausführen erlaubt");
    }
    if (permission & Permissions.Write) {
      console.log("- Schreiben erlaubt");
    }
    if (permission & Permissions.Read) {
      console.log("- Lesen erlaubt");
    }
    if (permission === Permissions.None) {
      console.log("- Keine Berechtigungen");
    }
  
    console.log("------------------------");
  }
  
  // Aufrufen der Funktion mit allen möglichen Enum-Werten
  checkPermissions(Permissions.None);
  checkPermissions(Permissions.Read);
  checkPermissions(Permissions.Write);
  checkPermissions(Permissions.Execute);
  checkPermissions(Permissions.Delete);
  
  // Zusätzliche Kombinationen
  checkPermissions(Permissions.Read | Permissions.Write);
  checkPermissions(Permissions.Read | Permissions.Write | Permissions.Execute);
  checkPermissions(Permissions.Read | Permissions.Write | Permissions.Execute | Permissions.Delete);
  