# pos.component.ts
This component is just to know wich coordinates had to be given to the spheres.

# spheres.component.ts
this file uses angular-three, I'm new with this library, there is a click event on a mesh and it should show a dialog, unfortunaly the components of the dialog lose their lifecycle, so there isn't a OnInit call, or update, so I force the updates needed with ApplicationRef.tick()