import React from 'react'
import { NavDropdown } from 'react-bootstrap'
export default function SpecialtyDoctors() {
  return (
    <div className='specialtyDoc'>
      <NavDropdown title="Specialty Doctors">
        <NavDropdown.Item href='/cardiac-car'>Cardiac Care</NavDropdown.Item>
        <NavDropdown.Item href='/ent'>Ent</NavDropdown.Item>
        <NavDropdown.Item href='/eye'>Eye</NavDropdown.Item>
        <NavDropdown.Item href='/heart-care'>Heart Care</NavDropdown.Item>
        <NavDropdown.Item href='/neurology'>Neurology</NavDropdown.Item>
        <NavDropdown.Item href='/osteoporosis'>Osteoporosis</NavDropdown.Item>
      </NavDropdown>
    </div>
  )
}
