package haletechbackend.entities;
import jakarta.persistence.*;


@Entity
@Table(name="doctors")
public class Doctor {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    public String id;
    public String name;
    public String qualification;
    public String dob;
    public String specialization;
    public String phoneno;
    public String email;

    public Doctor() {

    }

    public Doctor(String name, String qualification, String dob, String specialization, String phoneno, String email) {
        this.name = name;
        this.qualification = qualification;
        this.dob = dob;
        this.specialization = specialization;
        this.phoneno = phoneno;
        this.email = email;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getQualification() {
        return qualification;
    }

    public String getDob() {
        return dob;
    }

    public String getSpecialization() {
        return specialization;
    }

    public String getPhoneno() {
        return phoneno;
    }

    public String getEmail() {
        return email;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public void setPhoneno(String phoneno) {
        this.phoneno = phoneno;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Doctor{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", qualification='" + qualification + '\'' +
                ", dob='" + dob + '\'' +
                ", specialization='" + specialization + '\'' +
                ", phoneno=" + phoneno +
                ", email='" + email + '\'' +
                '}';
    }
}
