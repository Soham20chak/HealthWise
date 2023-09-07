package haletechbackend.entities;

import jakarta.persistence.*;


@Entity
@Table(name="patients")
public class Patient {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    public Long id;



    public String name;
    public String desc;
    public String phone;
    public String age;



    public String gender;
    public String appointmentdate;
    public String doctor;

    public Patient(Long id, String name, String desc, String phone, String age, String gender, String appointmentdate, String doctor) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.phone = phone;
        this.age = age;
        this.gender = gender;
        this.appointmentdate = appointmentdate;
        this.doctor = doctor;
    }

    public Patient() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAppointmentdate() {
        return appointmentdate;
    }

    public void setAppointmentdate(String appointmentdate) {
        this.appointmentdate = appointmentdate;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }

    @Override
    public String toString() {
        return "Patient{" +
                "id=" + id +
                "name='" + name + '\'' +
                ", desc='" + desc + '\'' +
                ", phone='" + phone + '\'' +
                ", age='" + age + '\'' +
                ", gender='" + gender + '\'' +
                ", appointmentdate='" + appointmentdate + '\'' +
                ", doctor='" + doctor + '\'' +
                '}';
    }
}
