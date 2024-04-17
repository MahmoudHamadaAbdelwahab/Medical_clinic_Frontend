import React, { useEffect, useState } from 'react'
import ProfilePationtHook from '../../hook/Pationt/profile-pationt-hook';

export default function ProfilePatient() {
    const [user] = ProfilePationtHook();

  return (
    <div>
        <div key={user.id}>
            <h3>{user.name}</h3>
            <h3>{user.message}</h3>
            <h3>{user.phone}</h3>
        </div>
    </div>
  )
}
