package paloma.com.gerenciador_spring.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.websocket.server.PathParam;

import paloma.com.gerenciador_spring.entities.VeiculoEntity;
import paloma.com.gerenciador_spring.service.VeiculoService;

@RestController
@RequestMapping("veiculos_entity")
@CrossOrigin(origins = "*")
public class VeiculosController {
         
     @Autowired
      VeiculoService veiculoService;

    @GetMapping
    public List<VeiculoEntity> listarVeiculos() {
        List<VeiculoEntity> veiculos = veiculoService.listarVeiculos();
        return veiculos;
    }
    
    @GetMapping("/{id}")
    public VeiculoEntity buscarVeiculoPorId(@PathVariable Integer id) {
        return veiculoService.buscarVeiculoPorId(id).orElse(null);
    }

    @PostMapping("/inserir")
    public VeiculoEntity salvarVeiculo(@RequestBody VeiculoEntity veiculoEntity) {
        return veiculoService.salvarVeiculo(veiculoEntity);
    }

   @PutMapping
    public VeiculoEntity atualizarVeiculo( @RequestBody VeiculoEntity veiculoEntity) {
       
        return veiculoService.salvarVeiculo(veiculoEntity);
    }

    @DeleteMapping
    public void excluirVeiculo(@PathParam("id") Integer id) {
        veiculoService.excluirVeiculo(id);
    }
    
   
}