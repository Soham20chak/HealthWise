package haletechbackend.controllers;
import java.util.*;

import haletechbackend.entities.Doctor;
import haletechbackend.exceptions.ResourseNotFoundException;
import haletechbackend.repositories.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class DoctorController {

    @Autowired
    private DoctorRepository doctorRepository;

    @CrossOrigin("http://localhost:4200/")
    @GetMapping("/doctors")
    public List<Doctor> getAllDoctors(){
        return doctorRepository.findAll();
    }

    @CrossOrigin("http://localhost:4200/")
    @PostMapping("/doctors")
    public Doctor createDoctor(@RequestBody Doctor doctor){
        return doctorRepository.save(doctor);
    }


    @CrossOrigin("http://localhost:4200/")
    @GetMapping("/doctors/{id}")
    public ResponseEntity<Doctor> getDoctorById(@PathVariable String id){
        Doctor doctor = doctorRepository.findById(id).orElseThrow(()-> new ResourseNotFoundException("Doctor does not exist"));
        return ResponseEntity.ok(doctor);
    }

    @CrossOrigin("http://localhost:4200/")
    @PutMapping("/doctors/{id}")
    public ResponseEntity<Doctor> updateDoctor(@PathVariable String id , @RequestBody Doctor doctorDetails){
        Doctor doctor = doctorRepository.findById(id).orElseThrow(()-> new ResourseNotFoundException("Doctor does not exist"));
        doctor.setName(doctorDetails.getName());
        doctor.setQualification(doctorDetails.getQualification());
        doctor.setDob(doctorDetails.getDob());
        doctor.setEmail(doctorDetails.getEmail());
        doctor.setPhoneno(doctorDetails.getPhoneno());
        doctor.setSpecialization(doctorDetails.getSpecialization());

        Doctor updatedDoctor = doctorRepository.save(doctor);
        return ResponseEntity.ok(updatedDoctor);

    }

    @CrossOrigin("http://localhost:4200/")
    @DeleteMapping("/doctors/{id}")
    public ResponseEntity<Map<String , Boolean>> deleteDoctor(@PathVariable String id){
        Doctor doctor = doctorRepository.findById(id).orElseThrow(()-> new ResourseNotFoundException("Doctor does not exist"));
        doctorRepository.delete(doctor);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
