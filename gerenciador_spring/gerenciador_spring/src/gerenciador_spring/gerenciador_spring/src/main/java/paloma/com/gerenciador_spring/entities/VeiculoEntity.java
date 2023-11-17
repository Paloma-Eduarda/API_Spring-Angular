 package paloma.com.gerenciador_spring.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name="veiculo_entity")
public class VeiculoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String modelo;

    @Column
    private String marca;

    @Column
    private String cor;

    @Column(name = "ano_de_fabricacao")
    private Integer anoDeFabricacao;

    @Column
    private String placa;

    @Column 
    private String reservado;
    
}